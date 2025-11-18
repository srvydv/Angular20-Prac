import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedModule } from '../../../module/shared/shared-module';
import { Spinner } from '../../../services/spinner';
import { Snackbar } from '../../../services/snackbar';
import { ApiCall } from '../../../services/api-call';

@Component({
  selector: 'app-get-api',
  imports: [SharedModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.scss',
})
export class GetApi {
  userList: any = [];
  displayColumns = ['id', 'name', 'company', 'username', 'email', 'country'];
  constructor(private apiCall: ApiCall, private spinner: Spinner, private snackbar: Snackbar) {}

  showData() {
    this.spinner.show();
    this.apiCall.getUsers().subscribe(
      (data) => {
        this.spinner.hide();
        this.userList = data;
      },
      (err) => {
        this.spinner.hide();
        this.snackbar.error(err?.message ? err?.message : 'Something went wrong');
      }
    );
  }

  hideData() {
    this.spinner.show();
    this.userList = [];
    this.spinner.hide();
  }
}
