---
title: modalform
---

```jsx
import React from 'react';
import { Button } from 'antd';
import ModalForm from './';
import { submit } from '../form/demos/common.jsx';


export default () => {
  const ref = React.useRef(null);
  return (
    <div>
      <Button
        onClick={() => {
          ref.current.show({
            title: '弹窗表单',
            fields: [
              {
                name: 'input1',
                label: 'Input1',
                field: 'input',
              },
            ],
            submit,
          });
        }}
      >
        show
      </Button>
      <ModalForm ref={ref} />
    </div>
  );
};
```

<code title="basic" src="./demos/basic.tsx">
