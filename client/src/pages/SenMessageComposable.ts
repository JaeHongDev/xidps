import { reactive, ref, watch } from 'vue';

export interface IVariable {
  [key: string] : string;
}

export const sendMessageComposable = () => {
  const message = ref('');
  const sendMessage = ref('');

  watch(() => message.value, () => {
    sendMessage.value = message.value
      .replace(/\n/g, '<br/>')
      .replace(/{{var1}}/g, '1')
      .replace(/{{var2}}/g, '2')
      .replace(/{{var3}}/g, '3')
      .replace(/{{var4}}/g, '4')
      .replace(/{{var5}}/g, '5');
  });
  return {
    message, sendMessage,
  };
};
