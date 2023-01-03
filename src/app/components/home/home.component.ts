import {Component, OnInit} from '@angular/core';
import {Button} from 'src/app/model/button';
import {Matrix} from 'src/app/model/matrix';
import {User} from 'src/app/model/user';
import {ButtonServiceService} from 'src/app/service/button-service.service';
import {MatrixServiceService} from 'src/app/service/matrix-service.service';
import {UserServiceService} from 'src/app/service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = "hello world";
  months: string[][] = new Array([]);
  letters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
  row: number = 0;
  col: number = 0;
  matrix: Matrix = new Matrix();
  matrices!: Matrix[];
  user!: User;
  showFlag: boolean = false;
  clickedButtonText!: string;
  btnText!: string;
  button: Button = new Button();
  clickedMatId!: number;
  xLocation!: number;
  yLocation!: number;
  btnDisabled: boolean = false;

  constructor(private matrixService: MatrixServiceService,
              private userService: UserServiceService,
              private buttonService: ButtonServiceService) {
  }

  ngOnInit(): void {
    this.user = this.userService.currentUser;

    this.matrices = this.userService.currentUser.matrices;
    for (let i = 0; i < this.matrices.length; i++) {
      this.draw(this.matrices[i].rowNum, this.matrices[i].colNum);
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  draw(rowss: number, colss: number) {
    for (let i = 0; i < rowss; i++) {
      var rows: string[] = new Array();
      for (let j = 0; j < colss; j++) {
        rows[j] = this.letters[i] + j;
      }
      this.months.push(rows);
    }
  }

  change(event: any) {
    this.draw(this.matrix.rowNum, this.matrix.colNum);
    this.matrix.userId = this.userService.currentUser.id;
    this.matrixService.saveMatrix(this.matrix).subscribe();

  }

  add(event: any, clickedMatrixId: number, xloc: number, yloc: number) {
    console.log("button text = " + event.target.title);
    this.showFlag = true;
    this.clickedMatId = clickedMatrixId;
    this.xLocation = xloc;
    this.yLocation = yloc;
  }

  saveButtonClicked() {
    this.showFlag = !this.showFlag;
    this.button.text = this.btnText;
    this.button.matrixId = this.clickedMatId;
    this.button.xlocation = this.xLocation
    this.button.ylocation = this.yLocation;
    this.btnDisabled = true;
    this.buttonService.saveButton(this.button).subscribe();
    alert(this.btnText);
  }
}
