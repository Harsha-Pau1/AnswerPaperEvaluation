import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ans-sheet-evaluation-main',
  templateUrl: './ans-sheet-evaluation-main.component.html',
  styleUrls: ['./ans-sheet-evaluation-main.component.scss']
})
export class AnsSheetEvaluationMainComponent implements OnInit {
  messagesArray = ['Pre-processed the answer sheet and tokenised',
  'Pre-processed the answer key file',
  'Summarization for student answers',
  'Summarization for valid answers',
  'Evaluation performed'
]
submitBtnClicked: boolean = false;
renderMsgArray: Array<string> = [];
refreshIntervalId: any;
showMark = false;
showLoader = false;
ansSheetFile: any;
ansSheetName: any;
ansKeyFile: any;
ansKeyName: any;
SERVER_URL = "http://127.0.0.1:5500/mpredict";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  submitFile() {
    this.onSubmit();
    this.submitBtnClicked = true;
    this.renderMsgArray = [];
    let count = 0;
    this.showMark = false;
    this.showLoader = false
    this.refreshIntervalId = setInterval(() => {
      if (this.renderMsgArray.length == this.messagesArray.length) {
        this.showLoader = true
        count = 0
        clearInterval(this.refreshIntervalId);
        this.showMarks();
      } else {
        this.renderMsgArray.push(this.messagesArray[count]);
        count = this.renderMsgArray.length;
      }

    }, 1000)

  }
  showMarks() {
    this.showLoader = true
    setTimeout(() => {
      this.showLoader = false
      this.showMark = true
    }, 5000)
  }
  onAnswerSheetSelect(event: any) {
    if (event.target.files.length > 0) {
      this.ansSheetFile = event.target.files[0];
      this.ansSheetName = event.target.files[0].name;
    }
  }

  onAnswerKeySelect(event: any) {
    if (event.target.files.length > 0) {
      this.ansKeyFile = event.target.files[0];
      this.ansKeyName = event.target.files[0].name;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file1', this.ansSheetFile);
    formData.append('file2', this.ansKeyFile);
    this.httpClient.post<any>(this.SERVER_URL, formData).pipe().subscribe((res) => {
      console.log('show obtained marks')
    });
  }
}
