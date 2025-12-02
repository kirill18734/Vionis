using System.Diagnostics;

namespace Vionis;


public partial class Settings : ContentPage
{
    public Settings()
    {
        InitializeComponent();
    }

    private void Picker_SelectedIndexChanged(object sender, EventArgs e)
    {
        //App.Current.UserAppTheme = AppTheme.Dark;
        //labelTheme.Text = $"Тема {theme.SelectedItem}";

        if (theme.SelectedItem.ToString() == "Темная")
        {
            App.Current.UserAppTheme = AppTheme.Dark;
        }
        else if (theme.SelectedItem.ToString() == "Светлая")
        {
            App.Current.UserAppTheme = AppTheme.Light;
        }
        else
        {
            AppTheme currentTheme = Application.Current.RequestedTheme;
            App.Current.UserAppTheme = currentTheme;
        }
    }
}