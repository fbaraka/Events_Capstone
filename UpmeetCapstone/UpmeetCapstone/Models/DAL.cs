using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;



namespace UpmeetCapstone.Models
{
    public class DAL
    {
        public static MySqlConnection DB;

        public static List<Event> GetAll()
        {
            return DB.GetAll<Event>().ToList();
        }

        public static Event GetOne(int id)
        {
            return DB.Get<Event>(id);
        }

        public static Event AddEvent(Event e)
        {
            DB.Insert(e);
            return e;
        }

        public static void Delete(int id)
        {
            Event e = new Event() { id = id };
            DB.Delete(e);
        }

        public static void Update(Event e)
        {
            DB.Update(e);
        }

    }
}
