import {Address} from './models/address.model'
import {ContactGroup} from './models/contactGroup.model'
import {PhoneNumber} from './models/phoneNumber.model'

export class Contact {
  idContact?: int;
  firstName?: string;
  lastName?: string;
  Email?: string
  address?: Address;
  contactGroups?: Set<ContactGroup>;
  phones?: Set<PhoneNumber>;

}
