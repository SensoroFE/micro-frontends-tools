import { Api } from '@walrus/types';

export default function (api: Api) {
  api.registerCommand({
    name: 'build',
    alias: 'b',
    description: 'build  ',
    fn: async ({ args }) => {
      console.log('build command');
    }
  });
}
