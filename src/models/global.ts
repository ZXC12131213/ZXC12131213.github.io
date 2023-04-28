// 全局共享数据示例
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>('超早睡超晚起');
  return {
    name,
    setName,
  };
};

export default useUser;
