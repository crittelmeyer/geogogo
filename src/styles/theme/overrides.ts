export const APP_BAR_HEIGHT = 60

export const overrides = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: APP_BAR_HEIGHT
        }
      }
    }
    // MuiSelect: {
    //   defaultProps: {
    //   },
    //   styleOverrides: {
    //     select: {
    //       height: 10
    //     }
    //   }
    // }
  }
}
