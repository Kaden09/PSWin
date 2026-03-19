import {
    Boxes,
  CalendarClock,
  Cloud,
  Gamepad2,
  Gem,
  Globe,
  Joystick,
  PackagePlus,
  ScrollText,
  Share2,
  Tag,
} from 'lucide-react';
import { Advantage } from '../types/advantage.type';

export const advantage_data: Advantage[] = [
  {
    icon: <Joystick />,
    title: 'Каталог классики',
  },
  {
    icon: <Gamepad2 />,
    title: 'Каталог игр',
  },
  {
    icon: <Share2 />,
    title: 'Share Play',
  },
  {
    icon: <Tag />,
    title: 'Эксклюзивные скидки',
  },
  {
    icon: <PackagePlus />,
    title: 'Новые игры каждый месяц',
  },
  {
    icon: <Globe />,
    title: 'Сетевые режимы игр',
  },
  {
    icon: <ScrollText />,
    title: 'Справка по игре',
  },
  {
    icon: <Cloud />,
    title: 'Облачное хранилище',
  },
];

export const advantage_data2: Advantage[] = [
  {
    icon: <Gem />,
    title: 'Эксклюзивные материалы',
  },
  {
    icon: <Boxes />,
    title: 'Коллекция PlayStation Plus',
  },
  {
    icon: <CalendarClock />,
    title: 'Пробные версии игр',
  },
  {
    icon: <Gamepad2 />,
    title: 'Классика Ubisoft',
  },
];