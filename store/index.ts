import { Store as PullStateStore } from 'pullstate';

import { lists, recipes, notifications, settings, TodoListItem, recipe, NotificationItem, Settings } from '../mock';

type StoreProps = {
  safeAreaTop: number;
  safeAreaBottom: number;
  menuOpen: boolean;
  notificationsOpen: boolean;
  currentPage: number | null;
  recipes: recipe[];
  lists: TodoListItem[];
  notifications: NotificationItem[];
  settings: Settings;
  selectedList: TodoListItem | undefined;
}

const Store = new PullStateStore<StoreProps>({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  recipes,
  lists,
  notifications,
  settings,
  selectedList: undefined,
});

export default Store;
