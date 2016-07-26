module.exports = `
  /* Style the tabs list */
  ul.tab {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
  }
  /* Float the list items side by side */
  ul.tab li {float: left;}

  /* Style the links inside the list items */
  ul.tab li a {
      display: inline-block;
      color: black;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.3s;
      font-size: 17px;
  }

  /* Change background color of links on hover */
  ul.tab li a:hover {background-color: #ddd;}

  /* Create an active/current tablink class */
  ul.tab li a:focus, .active {background-color: #ccc;}
`