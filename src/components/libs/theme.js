import {
    createMuiTheme
} from '@material-ui/core/styles'

export const spacing = {
    s0: 2.5,
    s1: 5,
    s2: 10,
    s3: 15,
    s4: 25,
    s5: 40,
    s6: 65,
    s7: 105,
}

export const uiSettings = {
    maxWidth: 1440,
    mainPadding: 125,
    popupSize: 600
}

export const colors = {
    primary: '#49d5bc',
    secondary: '#333333',
    grey: {
        g1: '#f5f5f5',
        g2: '#ddd',
        g3: '#A4A4A4',
        g4: '#8C8C8C',
        g5: '#767676',
        g6: '#565656',
        g7: '#3D3D3D',
        g8: '#252525',
        g9: '#171717',
    },
    error: '#ff1414',
    white: '#ffffff',
    black: '#000000',
    fontColor: '#333333',
    fontColorWhite: '#ffffff',
    facebook: '#3B5998',
    kakao: '#F7E317',
    naver: '#1EC800'
}

export const breakPoint = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
}

export const fonts = {
    primary: 'Nanum Barun Gothic',
    secondary: 'Arial'
}

export const fontSizes = {
    primary: 'body2',
    small: 'caption',
    medium: 'body1',
    button: 'button',
    title: 'subtitle1',
    title2: 'subtitle2',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
}

export const iconSizes = {
    small: '0.8em',
    medium: '1em',
    large: '1.3em'
}

const theme = createMuiTheme({
    custom: {
        background: colors.grey.g1,
        divider: colors.grey.g3,
        text: colors.black,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1441,
            xl: 1920,
        },
    },
    palette: {
        type: 'light',
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.grey.g8
        },
        error: {
            main: colors.error
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            `"${fonts.primary}"`,
            `"${fonts.secondary}"`
        ].join(','),
        caption: {
            color: colors.fontColor
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                display: 'inline-block',
                fontSize: 14
            },
            button: {
                color: colors.fontColor,
                fontSize: 12,
                textTransform: 'inherit'
            },
            body1: {
                color: colors.fontColor,
                fontSize: '0.855rem'
            },
            body2: {
                color: colors.fontColor,
                fontWeight: 400,
                fontSize: '0.755rem'
            },
            caption: {
                fontSize: '0.695rem'
            },
            h4: {
                color: colors.fontColor,
            },
            h5: {
                color: colors.fontColor,
            },
            h6: {
                color: colors.fontColor,
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: '10.5px 14px'
            },
            multiline: {
                padding: '10px 5px'
            }
        },
        MuiDialog: {
            paper: {
                // minWidth: 500,
                minHeight: 100
            },
            paperWidthSm: {
                maxWidth: 800
            }
        },
        MuiButton: {
            root: {
                padding: spacing.s0,
                borderRadius: 0,
                textTransform: 'inherit',
                minWidth: 35
            },
            text: {
                padding: spacing.s0,
            },
            outlined: {
                padding: `${spacing.s1}px ${spacing.s2}px`
            }
        },
        MuiBadge: {
            badge: {
                backgroundColor: colors.primary,
                color: colors.white
            }
        },
        MuiTableRow: {
            head: {
                height: 'inherit',
                backgroundColor: colors.grey.g1
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: `1px solid ${colors.grey.g3}`,
                // border: '1px solid #efeff4',
                // padding: 5,
                // height: 40,
                '&:last-child': {
                    paddingRight: 'inherit'
                }
            },
            head: {
                padding: `${spacing.s4}px ${spacing.s2}px`
            },
            body: {
                color: colors.fontColor,
                padding: `${spacing.s2}px ${spacing.s2}px`,
                verticalAlign: 'top'
            }
        },
        MuiInput: {
            root: {
                padding: spacing.s2,
                // height: 50,
                fontSize: 12,
                backgroundColor: colors.grey.g1,
                // marginTop: spacing.s2,
                "&$focused": {
                    "backgroundColor": colors.primary + '33'
                },
                "&$error": {
                    "backgroundColor": colors.error + '11'
                }
            },
            underline: {
                '&:before': {
                    borderBottom: `0px !important`
                },
                '&:after': {
                    borderBottom: 0
                }
            }
        },
        MuiFormHelperText: {
            root: {
                right: 0,
                top: -7,
                position: 'absolute',
                "&$error": {
                    color: `${colors.error}77`
                }
            }
        },
        MuiInputBase: {
            root: {
                // minWidth: 100
            },
            input: {
                '&$disabled': {
                    // backgroundColor: colors.grey.n3
                },
            },
            multiline: {
                backgroundColor: colors.grey.g1,
            }
        },
        MuiFormLabel: {
            root: {
                "color": `${colors.grey.g4} !important`
            }
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
                '&:last-child': {
                    marginRight: 0
                }
            }
        },
        MuiIconButton: {
            root: {
                padding: 6
            }
        },
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: 0
            }
        },
        MuiListItem: {
            root: {
                "&$selected": {
                    backgroundColor: 'inherit',
                    color: colors.primary
                }
            },
        },
        MuiListItemText: {
            primary: {
                width: '100%'
            },
            multiline: {
                marginTop: 0,
                marginBottom: 0,
            }
        },
        PrivateSwitchBase: {
            root: {
                padding: 0,
                marginRight: spacing.s2
            }
        },
        MuiSvgIcon: {
            root: {
                width: '0.8em',
                height: '0.8em'
            }
        },
        MuiPopover: {
            paper: {
                maxWidth: 'inherit'
            }
        }
    }
})

export default theme
