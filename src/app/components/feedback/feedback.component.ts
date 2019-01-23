import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})

export class FeedbackComponent implements OnDestroy {

  message: any;
  subscription: Subscription;
  constructor(private messageService: MessageService) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    this.subscription = this.messageService.getNewUserInfo().subscribe(info => {
      this.message = info;
      console.log('here', info);
    })
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}