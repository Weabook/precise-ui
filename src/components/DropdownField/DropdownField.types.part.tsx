import { InputChangeEvent, LabeledInputProps } from '../../common';

export interface DropdownFieldToggleEvent {
  state: 'open' | 'close';
}

export type DropdownFieldChangeEvent = InputChangeEvent<Array<string>>;

export interface DropdownFieldItem {
  key: string;
  content?: React.ReactChild;
  searchText?: string;
  type?: 'item' | 'divider' | 'header';
}
``;
export interface DropdownFieldProps extends LabeledInputProps<string | Array<string>> {
  /**
   * @ignore
   */
  children?: void;
  /**
   * This Boolean attribute indicates that multiple options can be selected in the list.
   * If it is not specified, then only one option can be selected at a time.
   * Default value is `false`.
   */
  multiple?: boolean;
  /**
   * The maximum number of items shown in case of multiple.
   * @default 8
   */
  maxSelectedShown?: number;
  /**
   * Fired when the dropdown gets opened or closed.
   */
  onToggle?(e: DropdownFieldToggleEvent): void;
  /**
   * Fired once the selected value changes.
   */
  onChange?(e: DropdownFieldChangeEvent): void;
  /**
   * The data to be displayed as selection basis.
   */
  data: Array<string | DropdownFieldItem>;
  /**
   * Removes the border of the control.
   * @default false
   */
  borderless?: boolean;
}
