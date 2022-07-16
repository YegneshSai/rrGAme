<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"
    import="java.lang.*,java.util.*,java.io.*,java.sql.*"
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
String user_name = request.getParameter("uname");
String password = request.getParameter("pass");
session.setAttribute("user",user_name);
out.println(request.getParameter("login"));
out.println(request.getParameter("register"));
try{
	out.println("enterd try");
	Class.forName("com.mysql.cj.jdbc.Driver");
			out.println("class found");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/game","root","root");
	out.println("connection made");
			Statement st=con.createStatement();
	try{
	if(request.getParameter("login").equals("login")){
		
		out.println("in login check");
	ResultSet rs = st.executeQuery("select `passwd` from `user` where `user_id` ='"+user_name+"'");
	
	 out.println(rs);
	while(rs.next()) {
		if(password.equals(rs.getString(1))) {
			out.print("LOgged in suceesfully");
			response.sendRedirect("index.html");
		}
		else out.print("enter correct credentials");
	}
	}
	}
	catch(Exception e){}
	try{
	if(request.getParameter("register").equals("register")){
		out.println("hiiiiiiiiiiiiiiiiiiiiiiiii");
	st.executeUpdate("Insert into `user` values('"+user_name+"','"+password+"',0)");
	out.println("inserted value");
con.close();
}
	}
	catch(Exception e){
		out.println(e);
	}
}
catch(Exception e) {
	out.print(e);
}
%>
</body>
</html>