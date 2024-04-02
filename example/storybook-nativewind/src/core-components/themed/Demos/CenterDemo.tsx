import React from 'react';
import { Center } from '..//center';
import { Text } from '..//text';

const CenterDemo = () => {
  return (
    <Center bg="$primary500" h={100} w={200}>
      <Text
        color="$textLight100"
        sx={{
          _dark: {
            color: '$textLight800',
          },
        }}
        fontWeight="$bold"
      >
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterDemo;
