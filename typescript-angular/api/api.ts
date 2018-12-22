export * from './campaigns.service';
import { CampaignsService } from './campaigns.service';
export * from './campaignsContact.service';
import { CampaignsContactService } from './campaignsContact.service';
export * from './campaignsContactCalls.service';
import { CampaignsContactCallsService } from './campaignsContactCalls.service';
export * from './mailingContacts.service';
import { MailingContactsService } from './mailingContacts.service';
export const APIS = [CampaignsService, CampaignsContactService, CampaignsContactCallsService, MailingContactsService];
