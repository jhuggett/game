import { ThemeHandler } from "Theme"

interface MenuChoice {
  name: string
  action?: (context: MenuContext) => void
  childChoices?: MenuChoice[]
}

export interface MenuItem {
  name: string
  index: number
}

interface MenuContext {
  themeHandler: ThemeHandler
}

export class MenuHandler {

  menuLevelStack: number[] = []

  constructor(private context: MenuContext) {}

  getCurrentOptions() : MenuItem[] {
    if (this.menuLevelStack.length == 0) {
      return menuContent.map( (item, i) => ({ name: item.name, index: i }) )
    }

    return [ { name: '< Back', index: -1 }, ...this.getOptionAtStack(this.menuLevelStack).childChoices.map((item, i) => ({ name: item.name, index: i })) ]
  }

  selectOption(i: number) {
    if (this.menuLevelStack.length == 0) {
      const selectedOption = menuContent[i]
      if (selectedOption.childChoices) {
        this.menuLevelStack.push(i)
        return
      }
      selectedOption.action(this.context)
      return
    }
    const selectedOption = this.getOptionAtStack(this.menuLevelStack).childChoices[i]
    if (i == -1) {
      this.menuLevelStack.pop()
      return
    }
    
    if (selectedOption.childChoices) {
      
      this.menuLevelStack.push(i)
      return
    }
    selectedOption.action(this.context)
  }

  getOptionAtStack(stack: number[]) : MenuChoice {
    console.log('stack', stack);
    
    let currentSelector = null

    stack.forEach( item => {
      console.log(currentSelector);
      
      if (!currentSelector) {
        currentSelector = menuContent[item]
        return
      }
      if (!currentSelector.childChoices || !currentSelector.childChoices[item]) {
        return
      }
      currentSelector = currentSelector.childChoices[item]
    })

    console.log('final', currentSelector);
    
    return currentSelector
  }

}

const changeFontColor = (color: string) => (context: MenuContext) => {
  context.themeHandler.theme.primary = color
  context.themeHandler.updateTheme()
}

const changeBackgroundColor = (color: string) => (context: MenuContext) => {
  context.themeHandler.theme.background = color
  context.themeHandler.updateTheme()
}

const menuContent: MenuChoice[] = [
  {
    name: 'Change theme',
    childChoices: [
      {
        name: 'Change font color',
        childChoices: [
          {
            name: 'White',
            action: changeFontColor('white')
          },
          {
            name: 'Orange',
            action: changeFontColor('orange')
          }
        ]
      },
      {
        name: 'Change background color',
        childChoices: [
          {
            name: 'Black',
            action: changeBackgroundColor('black')
          },
          {
            name: 'White',
            action: changeBackgroundColor('white')
          }
        ]
      }
    ]
  }
]
