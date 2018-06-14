import { ActionSheet } from "native-base";

interface MenuItem {
    text: string;
    callback: (index?: number) => void;
    icon: string;
    iconColor: string;
}

interface ActionSheetOptions {
    options: MenuItem[];
    title?: string;
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
}

export default class MenuService {

    private static instance: MenuService;

    public static getInstance = (): MenuService => {
        if (!MenuService.instance){
            MenuService.instance = new MenuService();
        }
        return MenuService.instance;
    }

    private menuItems: MenuItem[];
    private readonly cancelMenuItem: MenuItem = {
        text: 'Cancel',
        callback: () => void 0,
        icon: "close",
        iconColor: "red"
    };

    private constructor(){
        this.menuItems = [];
    }

    public setMenuItems(menuItems: MenuItem[]){ // TODO implementare anche string[]
        this.menuItems = menuItems;
    }

    public openMenu(cancelItem: boolean = true, title?: string, destructiveIndex?: number){
        const actionSheetOptions: ActionSheetOptions = {
            options: this.menuItems.slice()
        };
        if (cancelItem) {
            actionSheetOptions.options.push(this.cancelMenuItem);
            actionSheetOptions.cancelButtonIndex = actionSheetOptions.options.length - 1;
        }
        if (title) {
            actionSheetOptions.title = title;
        }
        if (destructiveIndex){
            actionSheetOptions.destructiveButtonIndex = destructiveIndex;
        }
        ActionSheet.show(actionSheetOptions, index => actionSheetOptions.options[index].callback());
    }

}