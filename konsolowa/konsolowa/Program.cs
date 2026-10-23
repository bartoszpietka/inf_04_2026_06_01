class Program
{
    /*
    * nazwa metody: Main
    * opis metody: funkcja losuje 5 haseł składających się z 12 znaków. funkcja losowo wybiera z czterech list odpowiednią ilość znaków i losowo ustawia je w kolejności aby utworzyć kompletne hasło. funkcja robi to dla każdego z pięciu haseł
    * parametry: „brak”
    * zwracany typ i opis: „brak”
    * autor: Bartosz Piętka
    */
    static void Main()
    {
        List<char> SmallCharList = new List<char> { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
        // 3 znaki
        List<char> LargeCharList = new List<char> { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
        // 3 znaki
        List<char> DiacriticCharList = new List<char> { 'ą', 'ę', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź', 'Ą', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ż', 'Ź' };
        // 2 znaki
        List<char> NumbersList = new List<char> { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        // 2 cyfry
        List<char> SpecialCharList = new List<char> { '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+' };
        // 2 znaki

        Random random = new Random();

        Console.WriteLine("Twoje wylosowane hasła to:");
        for (int passwordsCount = 0; passwordsCount < 5; passwordsCount++)
        {
            List<char> temporaryPassword = new List<char>();
            string password = "";

            for (int i = 0; i < 3; i++)
            {
                temporaryPassword.Add(SmallCharList[random.Next(0, 25)]);
                temporaryPassword.Add(LargeCharList[random.Next(0, 25)]);
            }
            for (int i = 0; i < 2; i++)
            {
                temporaryPassword.Add(DiacriticCharList[random.Next(0, 15)]);
                temporaryPassword.Add(NumbersList[random.Next(0, 9)]);
                temporaryPassword.Add(SpecialCharList[random.Next(0, 10)]);
            }

            for (int i = 0; i < 12; i++)
            {
                int randomChar = random.Next(0, 12 - i);
                password = password + temporaryPassword[randomChar];
                temporaryPassword.Remove(temporaryPassword[randomChar]);
            }
            Console.WriteLine(password);
        }
    }
}