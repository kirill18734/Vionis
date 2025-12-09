

namespace Vionis
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

        }

        protected override Window CreateWindow(IActivationState? activationState)
        {
            return new Title();
            //return new Window(new AppShell());
        }
    }
}