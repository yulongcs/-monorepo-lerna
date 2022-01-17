---
title: RFC - 插件规范
---

# 插件规范

## render-plugin

渲染插件

```jsx
import React from 'react';
import { Tag } from 'antd';
import sula from './';

sula.renderType('rfctag', (ctx, config) => {
  const color = ctx.getColor();
  return <Tag {...config.props} color={color} />;
})
export default () => {
  return sula.render('rfctag', 
    {
      getColor: () => 'blue',
    },
    {
      props: {
        children: 'sula'
      }
    }
  )
}
```

## action-plugin

行为插件

```jsx
import React from 'react';
import { Tag } from 'antd';
import sula from './';

sula.actionType('rfchello', (ctx, config) => {
  const name = ctx.getName();
  console.log(`${config.say} ${name}`);
})
export default () => {
  sula.action('rfchello', {
    getName: () => 'sula',
  }, {
    say: 'hello'
  });

  return <div>nothing</div>;
}
```

## field-plugin

表单插件

```jsx
import React from 'react';
import { Select } from 'antd';
import sula from './';

sula.fieldType('rfcselect', (ctx, config) => {
  const { source = [] } = ctx;
  return (
    <Select {...config.props}>
      {source.map((item) => {
        return <Select.Option key={item.value}>{item.text}</Select.Option>;
      })}
    </Select>
  );
})
export default () => {
  return sula.field('rfcselect', 
    {
      source: [{
        text: 'APPLE',
        value: 'apple'
      }, {
        text: 'PEACH',
        value: 'peach',
      }],
    },
    {
      props: {
        style: {
          width: 200,
        },
      }
    }
  )
}
```
