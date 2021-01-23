import { Component, OnInit } from '@angular/core';
import { Calendar, ICalendarDate } from 'igniteui-angular/main';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public timeGenerator: Calendar = new Calendar();
  public today: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0);

  public data = [];

  ngOnInit() {
      this.createData();
  }

  createData() {
    for (let i = 0; i < 100; i++) {

        var item = {
            Downloads: 100 + i,
            ID: i,
            ProductName: 'ProductName' + i,
            ReleaseDate: this.timeGenerator.timedelta(this.today, 'month', -1),
            Released: true,
            Category: "Category" + i,
            Items: "Items" + i,
            Test: "test" + i
        }

        this.data.push(item)
    }
  }
}
