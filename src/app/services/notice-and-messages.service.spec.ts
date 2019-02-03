import { TestBed, inject } from '@angular/core/testing';

import { NoticeAndMessagesService } from './notice-and-messages.service';

describe('NoticeAndMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeAndMessagesService]
    });
  });

  it('should be created', inject([NoticeAndMessagesService], (service: NoticeAndMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
