/*public class main
{
	public static void main(String args[]){
		String s="This is java is String";
		System.out.println(s.startsWith("This"));
		System.out.println(s.endsWith("ing"));
		System.out.println(s.contains("Str"));
        System.out.println(s.indexOf("is",3));//search from 0 index
        System.out.println(s.indexOf("is",3));//search from index 3        
        System.out.println(s.lastIndexOf("is"));//search from last in running
        System.out.println(s.indexOf("i",12));//serch from index 12th index
	}
}*/
/*public class main {
    public static void main(String args[]){
        int a=50;
        System.out.println(String.valueOf(a));//converts to string
        System.out.println(Integer.toString(a));//converts to string
    }
}*/
public class main {
    public static void main(String args[]){
        StringBuffer s=new StringBuffer("java string");
        s.append("Buffer");
        System.out.println(s);
        s.insert(5,"Buffer");
        System.out.println(s);
        s.replace(2,5,"Buffer");
        System.out.println(s);
        s.delete(2,5);
        System.out.println(s);
        s.reverse();
        System.out.println(s);
        System.out.println(s.capacity());
        s.ensureCapacity(1000);
        System.out.println(s.capacity());
    }
}


