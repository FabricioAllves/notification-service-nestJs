import { Notification } from './Notification';
import { Content } from './value-objects/content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipientId-id',
    });

    expect(notification).toBeTruthy();
  });
});
