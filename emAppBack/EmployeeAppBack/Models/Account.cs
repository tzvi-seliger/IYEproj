﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAppBack.Models
{
    public class Account
    {
        public int AccountID { get; set; }
        public string AccountName { get; set; }
        public string AccountDescription { get; set; }
        public string AccountLogo { get; set; }

        public List<Training> TrainingList { get; set; }

        public List<User> Users { get; set; }
    }
}
