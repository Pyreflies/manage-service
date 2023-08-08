import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    const activeTab = this.tabs.find(tab => tab.active);
    if (!activeTab && this.tabs.length > 0) {
      this.tabs.first.active = true;
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach(t => (t.active = false));
    tab.active = true;
  }
}
