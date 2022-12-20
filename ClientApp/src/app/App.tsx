import { CustomImages } from 'styles/Images';
import { DefaultButton, Image, PrimaryButton, Stack,Text } from '@fluentui/react';
import { CustomButtonProps } from './infrastructure/directives/FluentProps';

/**
 * @author Juan Carlos Velazquez Quiroz
 */

function App(props: CustomButtonProps) {
  const { disabled, checked } = props;
  return (
    <Stack horizontalAlign='space-between' tokens={{childrenGap:20}} styles={{
      root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f4f4f4',
        padding: '20px'
      }
    }}>
      <Stack.Item align='center'>
        <Image src={CustomImages.logo}  imageFit={3} alt={'customlogo'} />
        <Text variant='large'>
          Template for React with Fluent UI
        </Text>
      </Stack.Item>
      <Stack horizontal horizontalAlign='center' tokens={{childrenGap:40}}>
      <DefaultButton text="Standard" onClick={() => {alert('u pushed standard button')}} allowDisabledFocus disabled={disabled} checked={checked } />
      <PrimaryButton text="Primary" onClick={() => {alert('u pushed primary button')}} allowDisabledFocus disabled={disabled} checked={checked} />
      </Stack>
    </Stack>
  );
}

export default App;
