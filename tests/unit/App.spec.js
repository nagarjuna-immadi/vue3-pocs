import { setupServer } from 'msw/node';
import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import handlers from '../../mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

let wrapper;
const worksMsg = 'MSW is working!';

describe('App', () => {
  beforeEach(() => {
    wrapper = mount(App);
  });

  it('calls fetchMessage once and displays a message', async () => {
    await setTimeout(() => {
      expect(wrapper.text()).toMatch(worksMsg);
    }, 0);
  });
});
