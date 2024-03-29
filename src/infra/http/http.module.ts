import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { ReadNotification } from '@application/use-cases/read-notification copy';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    UnreadNotification,
    CountRecipientNotification,
    ReadNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
