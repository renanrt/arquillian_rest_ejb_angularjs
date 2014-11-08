package org.arquillian.example.rest;

import java.util.List;

import javax.inject.Inject;

import org.arquillian.example.model.Book;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.example.project.model.Language;

@RunWith(Arquillian.class)
public class BookEndpointTest
{

   @Inject
   private BookEndpoint bookendpoint;

   @Deployment
   public static JavaArchive createDeployment()
   {
	   
	return ShrinkWrap.create(JavaArchive.class)
			//.addAsLibraries(javaLib)
			.addPackage(BookEndpoint.class.getPackage())
    		.addPackage(Book.class.getPackage())
    		.addPackage(Language.class.getPackage())
            .addAsManifestResource("META-INF/persistence.xml", "persistence.xml")
            .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
   }

   @Test
   public void test1()
   {
      Assert.assertNotNull(bookendpoint);
      List<Book> all = bookendpoint.listAll(null, null);
      Assert.assertTrue(all.isEmpty());
      
      Book entity = new Book();
      entity.setAuthor("Any");
      
      bookendpoint.create(entity);
      
      all = bookendpoint.listAll(null, null);
      Assert.assertFalse(all.isEmpty());
   }
   
   @Test
   public void test2()
   {
      
      Book entity = new Book();
      entity.setAuthor("Any");
      
      bookendpoint.create(entity);
      
   }
   
   @Test
   public void test3()
   {
      Book entity = new Book();
      entity.setAuthor("Any");
      
      bookendpoint.create(entity);
      
      
   }
   
}
