import { ClientProComponentsModule } from './ClientProComponents.module';

describe('ComponentsModule', () => {
  let componentsModule: ClientProComponentsModule;

  beforeEach(() => {
    componentsModule = new ClientProComponentsModule();
  });

  it('should create an instance', () => {
    expect(componentsModule).toBeTruthy();
  });
});
