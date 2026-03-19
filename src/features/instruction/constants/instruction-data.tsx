import { KeyRound, LaptopMinimalCheck, Rocket } from 'lucide-react';

export const instruction_data: Step[] = [
  {
    icon: <KeyRound />,
    step: '01',
    title: 'Учетные данные',
    desc: 'Вы получаете логин и пароль от игрового аккаунта.',
  },
  {
    icon: <Rocket />,
    step: '02',
    title: 'Активация',
    desc: 'Добавляете его на консоль, включаете активацию аккаунта в настройках по инструкции.',
  },
  {
    icon: <LaptopMinimalCheck />,
    step: '03',
    title: 'Доступ открыт',
    desc: 'После активации аккаунт подписка начинает работать на всех аккаунтах вашей консоли!',
  },
];
