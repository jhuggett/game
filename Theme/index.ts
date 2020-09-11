
export class ThemeHandler {
  theme: Theme

  updateTheme() {
    this.setThemeState(this.theme)
  }

  loadTheme(theme: Theme) {
    this.theme = theme
    this.updateTheme()
  }

  constructor(private setThemeState) {
  }
}


export interface Theme {
  primary: string
  background: string
  font: string
}

