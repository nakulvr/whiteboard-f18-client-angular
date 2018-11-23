import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  topicId;
  widgets = [];
  // widgetId;
  setParams(params) {
    this.topicId = params.topicId;
    this.loadWidgets(this.topicId);
  }

  loadWidgets(topicId) {
    this.widgetService.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }
  splitString(string: String) {
    return string.split(',');
  }
  ngOnInit() {
  }

}
