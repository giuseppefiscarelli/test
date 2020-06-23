import { UserInterface } from './../interfaces/user';
import { UserDetailComponent } from './../user-detail/user-detail.component';
import { User } from '../classes/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
  users: User[] =  [
    {
      id: 1,
      name : 'nome1',
      lastname : 'cognome1',
      email : 'email@mail.it',
      fiscalcode: 'FSCGPP84R24D643B',
      province : 'Roma',
      phone: '3331234567',
      age: 12
    },
    {
      id: 2,
      name : 'nome2',
      lastname : 'cognome2',
      email : 'email2@mail.it',
      fiscalcode: 'FSCGPP84R24D643B',
      province : 'Roma',
      phone: '3331234567',
      age: 13
    },
    {
      id: 3,
      name : 'nome3',
      lastname : 'cognome3',
      email : 'email3@mail.it',
      fiscalcode: 'FSCGPP84R24D643B',
      province : 'Roma',
      phone: '3331234567',
      age: 13
    },
    {
      id: 4,
      name : 'nome4',
      lastname : 'cognome4',
      email : 'email4@mail.it',
      fiscalcode: 'FSCGPP84R24D643B',
      province : 'Roma',
      phone: '3331234567',
      age: 13
    },
    {
      id: 5,
      name : 'nome5',
      lastname : 'cognome5',
      email : 'email5@mail.it',
      fiscalcode: 'FSCGPP84R24D643B',
      province : 'Roma',
      phone: '3331234567',
      age: 13
    }
  ];
  constructor(){
  }
 getUsers(){
   return this.users;
 }
 deleteUser(user){
   let index = this.users.indexOf(user);
   if (index >= 0){
   this.users.splice(index, 1);
   }
 }
 updateUser(user: UserInterface){
  const idx = this.users.findIndex((v) => v.id === user.id);
  alert(idx);
  if(idx !== -1){
    this.users[idx] = user;
  }
 }
 createUser(user: UserInterface){
  this.users.splice(0, 0, user);
 }
}
