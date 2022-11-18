﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetCapstone.Models;

namespace UpmeetCapstone.Controllers
{
    [Route("event")]
    [ApiController]
    public class EventController : ControllerBase
    {

        // Read All
        [HttpGet]
        public List<Event> GetAll()
        {
            return DAL.GetAll();
        }
        // Read One
        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return DAL.GetOne(id);
        }
        // Create
        [HttpPost]
        public Event Save(Event e)
        {
            return DAL.AddEvent(e);
        }
        // Delete
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.Delete(id);
        }
        // Update
        [HttpPut]
        public void Update(Event e)
        {
            DAL.Update(e);
        }

    }
}
