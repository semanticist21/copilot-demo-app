import { CSSObject, CSSInterpolation } from '@mui/system';
import { PopperClassKey } from '@mui/base/Popper';
import { ComponentsPropsList } from './props';
import { TouchRippleClassKey } from '../ButtonBase/TouchRipple';
import { ButtonBaseClassKey } from '../ButtonBase';
import { ButtonGroupClassKey } from '../ButtonGroup';

export type OverridesStyleRules<
  ClassKey extends string = string,
  ComponentName = keyof ComponentsPropsList,
  Theme = unknown,
> = Record<
  ClassKey,
  | CSSInterpolation
  | ((
      // Record<string, unknown> is for other props that the slot receive internally
      // Documenting all ownerStates could be a huge work, let's wait until we have a real needs from developers.
      props: (ComponentName extends keyof ComponentsPropsList
        ? { ownerState: ComponentsPropsList[ComponentName] & Record<string, unknown> }
        : {}) & { theme: Theme } & Record<string, unknown>,
    ) => CSSInterpolation)
>;

export type ComponentsOverrides<Theme = unknown> = {
  [Name in keyof ComponentNameToClassKey]?: Partial<
    OverridesStyleRules<ComponentNameToClassKey[Name], Name, Theme>
  >;
} & {
  MuiCssBaseline?: CSSObject | string | ((theme: Theme) => CSSInterpolation);
};

export interface ComponentNameToClassKey {
  MuiAlert: AlertClassKey;
  MuiAlertTitle: AlertTitleClassKey;
  MuiAppBar: AppBarClassKey;
  MuiAutocomplete: AutocompleteClassKey;
  MuiAvatar: AvatarClassKey;
  MuiAvatarGroup: AvatarGroupClassKey;
  MuiBackdrop: BackdropClassKey;
  MuiBadge: BadgeClassKey;
  MuiBottomNavigation: BottomNavigationClassKey;
  MuiBottomNavigationAction: BottomNavigationActionClassKey;
  MuiBreadcrumbs: BreadcrumbsClassKey;
  MuiButton: ButtonClassKey;
  MuiButtonBase: ButtonBaseClassKey;
  MuiButtonGroup: ButtonGroupClassKey;
  MuiCard: CardClassKey;
  MuiCardActionArea: CardActionAreaClassKey;
  MuiCardActions: CardActionsClassKey;
  MuiCardContent: CardContentClassKey;
  MuiCardHeader: CardHeaderClassKey;
  MuiCardMedia: CardMediaClassKey;
  MuiCheckbox: CheckboxClassKey;
  MuiChip: ChipClassKey;
  MuiCircularProgress: CircularProgressClassKey;
  MuiCollapse: CollapseClassKey;
  MuiContainer: ContainerClassKey;
  MuiDialog: DialogClassKey;
  MuiDialogActions: DialogActionsClassKey;
  MuiDialogContent: DialogContentClassKey;
  MuiDialogContentText: DialogContentTextClassKey;
  MuiDialogTitle: DialogTitleClassKey;
  MuiDivider: DividerClassKey;
  MuiDrawer: DrawerClassKey;
  MuiAccordion: AccordionClassKey;
  MuiAccordionActions: AccordionActionsClassKey;
  MuiAccordionDetails: AccordionDetailsClassKey;
  MuiAccordionSummary: AccordionSummaryClassKey;
  MuiFab: FabClassKey;
  MuiFilledInput: FilledInputClassKey;
  MuiFormControl: FormControlClassKey;
  MuiFormControlLabel: FormControlLabelClassKey;
  MuiFormGroup: FormGroupClassKey;
  MuiFormHelperText: FormHelperTextClassKey;
  MuiFormLabel: FormLabelClassKey;
  MuiGrid: GridClassKey;
  MuiGrid2: Grid2Slot;
  MuiIcon: IconClassKey;
  MuiIconButton: IconButtonClassKey;
  MuiImageList: ImageListClassKey;
  MuiImageListItem: ImageListItemClassKey;
  MuiImageListItemBar: ImageListItemBarClassKey;
  MuiInput: InputClassKey;
  MuiInputAdornment: InputAdornmentClassKey;
  MuiInputBase: InputBaseClassKey;
  MuiInputLabel: InputLabelClassKey;
  MuiLinearProgress: LinearProgressClassKey;
  MuiLink: LinkClassKey;
  MuiList: ListClassKey;
  MuiListItem: ListItemClassKey;
  MuiListItemButton: ListItemButtonClassKey;
  MuiListItemAvatar: ListItemAvatarClassKey;
  MuiListItemIcon: ListItemIconClassKey;
  MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  MuiListItemText: ListItemTextClassKey;
  MuiListSubheader: ListSubheaderClassKey;
  MuiMenu: MenuClassKey;
  MuiMenuItem: MenuItemClassKey;
  MuiMenuList: MenuListClassKey;
  MuiMobileStepper: MobileStepperClassKey;
  MuiModal: ModalClassKey;
  MuiNativeSelect: NativeSelectClassKey;
  MuiOutlinedInput: OutlinedInputClassKey;
  MuiPagination: PaginationClassKey;
  MuiPaginationItem: PaginationItemClassKey;
  MuiPaper: PaperClassKey;
  MuiPopover: PopoverClassKey;
  MuiPopper: PopperClassKey;
  MuiRadio: RadioClassKey;
  MuiRating: RatingClassKey;
  MuiScopedCssBaseline: ScopedCssBaselineClassKey;
  MuiSelect: SelectClassKey;
  MuiSkeleton: SkeletonClassKey;
  MuiSlider: SliderClassKey;
  MuiSnackbar: SnackbarClassKey;
  MuiSnackbarContent: SnackbarContentClassKey;
  MuiSpeedDial: SpeedDialClassKey;
  MuiSpeedDialAction: SpeedDialActionClassKey;
  MuiSpeedDialIcon: SpeedDialIconClassKey;
  MuiStack: StackClassKey;
  MuiStep: StepClasskey;
  MuiStepButton: StepButtonClasskey;
  MuiStepConnector: StepConnectorClasskey;
  MuiStepContent: StepContentClasskey;
  MuiStepIcon: StepIconClasskey;
  MuiStepLabel: StepLabelClasskey;
  MuiStepper: StepperClasskey;
  MuiSvgIcon: SvgIconClassKey;
  MuiSwitch: SwitchClassKey;
  MuiTab: TabClassKey;
  MuiTable: TableClassKey;
  MuiTableBody: TableBodyClassKey;
  MuiTableCell: TableCellClassKey;
  MuiTableContainer: TableContainerClassKey;
  MuiTableFooter: TableFooterClassKey;
  MuiTableHead: TableHeadClassKey;
  MuiTablePagination: TablePaginationClassKey;
  MuiTableRow: TableRowClassKey;
  MuiTableSortLabel: TableSortLabelClassKey;
  MuiTabs: TabsClassKey;
  MuiTextField: TextFieldClassKey;
  MuiToggleButton: ToggleButtonClassKey;
  MuiToggleButtonGroup: ToggleButtonGroupClassKey;
  MuiToolbar: ToolbarClassKey;
  MuiTooltip: TooltipClassKey;
  MuiTouchRipple: TouchRippleClassKey;
  MuiTypography: TypographyClassKey;
}
