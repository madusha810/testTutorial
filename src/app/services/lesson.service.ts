import { Injectable } from '@angular/core';
import { MENU_LIST_DATA, New_Menu_Data } from '../data/menu-list.data';
import { MenuItemVO, Newmenuitem } from '../vo/menu-item.vo';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  readonly MENU_LIST_DATA: Array<MenuItemVO> = MENU_LIST_DATA;
  readonly New_Menu_Data: Array<Newmenuitem> = New_Menu_Data;
  

  constructor() { }

  getLessonFromUrl(url: string): Newmenuitem {
    let lesson: Newmenuitem;
    this.New_Menu_Data.forEach((menuItem: Newmenuitem) => {
      if (menuItem.url === 'lesson/' + url) {
        lesson = menuItem;
      }
      
    });
    return lesson;
  }

  getNewLessonFromUrl(url: string): MenuItemVO {
    let lesson: MenuItemVO;
    this.MENU_LIST_DATA.forEach((menuItem: MenuItemVO) => {
      if (menuItem.url === 'lesson/' + url) {
        lesson = menuItem;
      }
      
    });
    return lesson;
  }

 
  
}
