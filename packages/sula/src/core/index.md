---
group:
  title: sula-core
---

# sula-core

```tsx
import React from 'react';
import sula from './';

sula.renderType('b', () => {
  return <b>123</b>
})

export default () => {
  return <div>{sula.render('b', {}, {})}</div>
}
```

## PubSub

```jsx
// pubsub
import React from 'react';
import PubSub from '../_util/pubsub';
import { Button } from 'antd';



export default () => {
  React.useEffect(() => {
    const unsub = PubSub.sub('demo::stop', (payload) => {
      console.log('payload: ', payload);
    });
    return unsub;
  }, [])

  return <Button onClick={() => {
    PubSub.pub('demo::stop', 'foo stop');
  }}>Pub</Button>
}
```