---
title: 国际化
---

```jsx
/**
 * title: 默认 
 */
import React from 'react';
import LocaleReceiver from './';

export default () => {
  return <LocaleReceiver>
    {locale => {
      return <div>{locale.saveText}</div>
    }}
  </LocaleReceiver>
}

```

```jsx
/**
 * title: 中文 
 */
import React from 'react';
import LocaleReceiver from './';
import SulaConfigProvider from '../config-provider';
import zhCNLocaleData from './zh_CN';

export default () => {
  return <SulaConfigProvider locale={zhCNLocaleData}><LocaleReceiver>
    {locale => {
      return <div>{locale.saveText}</div>
    }}
  </LocaleReceiver></SulaConfigProvider>
}

```

