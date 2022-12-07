import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { StickyPopoverDirective } from './sticky-popover.directive';
import { NgbdPopoverBasic } from './popover-basic';
import { StickyPopoverDirective } from './sticky-popover';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdPopoverBasic, StickyPopoverDirective],
  exports: [NgbdPopoverBasic],
  bootstrap: [NgbdPopoverBasic],
})
export class NgbdPopoverBasicModule {}
