export interface Setting {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  id: number;
}

const settings: Setting[] = [
  {
    title: "Network & internet",
    subtitle: "Wi-Fi, mobile, data usage, and hotspot",
    color: "#1998f2",
    icon: "wifi",
    id: 0,
  },
  {
    title: "Connected devices",
    subtitle: "Bluetooth, Android Auto, driving mode, NFC",
    color: "#74b711",
    icon: "laptop",
    id: 0,
  },
  {
    title: "Apps & notifications",
    subtitle: "Assistant, recent apps, default apps",
    color: "#ff7e13",
    icon: "apps",
    id: 0,
  },
  {
    title: "Battery",
    subtitle: "89% - About 1 day, 6 hr left",
    color: "#238983",
    icon: "flash",
    id: 0,
  },
];

export const getSettings = () => settings;

export const getSetting = (id: number) => settings.find((m) => m.id === id);
