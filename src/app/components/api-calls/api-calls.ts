import { AfterViewInit, Component, effect, inject, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Posts } from '../../model/posts.model';
import { SharedModule } from '../../module/shared/shared-module';
import { ApiCall } from '../../services/api-call';
import { Snackbar } from '../../services/snackbar';
import { Spinner } from '../../services/spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../common/dialog/confirmation-dialog/confirmation-dialog';
import { ApiErrorHandler } from '../../common/services/api-error-handler';
import { AddEditPostDialog } from './add-edit-post-dialog/add-edit-post-dialog';

@Component({
  selector: 'app-post-api',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './api-calls.html',
  styleUrl: './api-calls.scss',
})
export class ApiCalls implements AfterViewInit {
  readonly dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Posts>([]);

  postList = signal<Posts[]>([]);
  displayColumns = ['id', 'title', 'body', 'userId', 'action'];

  constructor(
    private snackbar: Snackbar,
    private spinner: Spinner,
    private apiCall: ApiCall,
    private apiErrorHandler: ApiErrorHandler
  ) {
    // React to signal changes
    effect(() => {
      this.dataSource.data = this.postList();
      if (this.paginator) {
        this.dataSource.paginator = this.paginator; // Re-assign paginator
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onShowAllPosts() {
    this.spinner.show();
    this.apiCall.getAllPosts().subscribe(
      (data) => {
        this.spinner.hide();
        this.postList.set(data);
      },
      (err) => {
        this.postList.set([]);
        this.apiErrorHandler.handleApiError(err);
      }
    );
  }

  onDeleteItem(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Confirm',
        message: 'Are you sure want to delete the item?',
        okButtonText: 'Yes',
        cancelButtonText: 'cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.deleteRow(id);
      }
    });
  }

  deleteRow(id: number) {
    this.spinner.show();
    this.apiCall.deletePost(id).subscribe(
      (res) => {
        this.spinner.hide();
        this.snackbar.success('Post Deleted Successfully!');
        this.postList.update((posts) => posts.filter((post) => post.id !== id));
      },
      (err) => {
        this.apiErrorHandler.handleApiError(err);
      }
    );
  }

  onAddEditItem(data?: Posts) {
    const dialogRef = this.dialog.open(AddEditPostDialog, {
      data: { ...data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (data?.id) {
          this.onEditPost(data?.id, result);
        } else {
          this.onAddPost(result);
        }
      }
    });
  }

  onAddPost(payload: Posts) {
    this.spinner.show();
    this.apiCall.addPost(payload).subscribe(
      (res) => {
        this.spinner.hide();
        this.postList.update((posts) => [...posts, res]);
        this.snackbar.success('Post Created Successfully!');
      },
      (err) => {
        this.apiErrorHandler.handleApiError(err);
      }
    );
  }

  onEditPost(id: number, payload: Posts) {
    this.spinner.show();
    this.apiCall.editPost(id, payload).subscribe(
      (res) => {
        this.spinner.hide();
        this.snackbar.success('Post Updated Successfully!');
        this.postList.update((posts) => posts.map((post) => (post.id === id ? res : post)));
      },
      (err) => {
        this.apiErrorHandler.handleApiError(err);
      }
    );
  }
}
