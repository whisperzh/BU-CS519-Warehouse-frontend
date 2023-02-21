/**
 * This file can be used to store types and interfaces for data received from the API.
 * It's good practice to name your interfaces in the following format:
 * IMyInterfaceName - Where the character "I" is prepended to the name of your interface.
 * This helps remove confusion between classes and interfaces.
 */

/**
 * This represents the combined data entry
 */
export interface IDisplayDataClass  {
  Date: string;
  WarehouseID: string;
  ShippingPO: string;
  ShipmentID: string;
  BoxesRcvd: number;
}
