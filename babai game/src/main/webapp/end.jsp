<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"
    import="java.lang.*,java.util.*,java.io.*,java.sql.*"
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<% 

Enumeration<String> attributes = request.getSession().getAttributeNames();
while (attributes.hasMoreElements()) {
    String attribute = (String) attributes.nextElement();
    out.print(attribute+" : "+request.getSession().getAttribute(attribute));
}

Integer score =Integer.parseInt(request.getParameter("score"));
out.println(score);

//Integer highscore = Integer.parseInt(request.getParameter("highscore"));
String user=(String)session.getAttribute("user");
//out.print(session.getAttribute("user"));

	try{
		//out.println("enterd try");
		Class.forName("com.mysql.cj.jdbc.Driver");
		//out.println("class found");
		Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/game","root","root");
		//out.println("connection made");
		Statement st=con.createStatement();
		ResultSet res=st.executeQuery("select `high_score` from `user` where `user_id` ='"+user+"'");
				res.next();
		Integer hs=Integer.parseInt(res.getString(1));
		//Integer hs=0;
		if(hs<score){
			hs=score;
		
		st.executeUpdate("update `user` set `high_score`='"+hs+"' where `user_id` ='"+user+"'");
		}
		//out.print("high score is :");
		//while(res.next()){
			%>
			<div style="display:block" class="popup" id="popup">
	                            <img src="pics/wrong.png" alt="" class="img">
	                            <h1>Score: <p class="score" id="score" name="score"><%= score %></p> </h1>
	                            <h3>High Score: <p id="highscore" name="highscore"><%= hs %></p> </h3>
	                            <input type="submit" class="popup-submit" value="ok">
	                            <input type="submit" class="popup-restart" value="restart">
	                        </div>
		<%	
			//out.print(res.getString(1));
		
}
catch(Exception e) {


}
%>


</body>
</html>