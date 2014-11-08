package org.arquillian.example.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import com.example.project.model.Language;
import javax.persistence.Enumerated;
import org.arquillian.example.model.Speaker;
import java.util.Set;
import java.util.HashSet;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;

@Entity(name="Book")
@XmlRootElement
public class Book implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @Column
   private String isbn;

   @Column
   private String title;

   @Column
   private String author;

   @Column(length = 2000)
   private String description;

   @Column
   private Float price;

   @Column
   private Integer nbOfPages;

   @Column
   private String publicationDate;

   @Enumerated
   private Language language;

   @OneToMany
   private Set<Speaker> speakers = new HashSet<Speaker>();

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Book))
      {
         return false;
      }
      Book other = (Book) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getIsbn()
   {
      return isbn;
   }

   public void setIsbn(String isbn)
   {
      this.isbn = isbn;
   }

   public String getTitle()
   {
      return title;
   }

   public void setTitle(String title)
   {
      this.title = title;
   }

   public String getAuthor()
   {
      return author;
   }

   public void setAuthor(String author)
   {
      this.author = author;
   }

   public String getDescription()
   {
      return description;
   }

   public void setDescription(String description)
   {
      this.description = description;
   }

   public Float getPrice()
   {
      return price;
   }

   public void setPrice(Float price)
   {
      this.price = price;
   }

   public Integer getNbOfPages()
   {
      return nbOfPages;
   }

   public void setNbOfPages(Integer nbOfPages)
   {
      this.nbOfPages = nbOfPages;
   }

   public String getPublicationDate()
   {
      return publicationDate;
   }

   public void setPublicationDate(String publicationDate)
   {
      this.publicationDate = publicationDate;
   }

   public Language getLanguage()
   {
      return language;
   }

   public void setLanguage(Language language)
   {
      this.language = language;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      result += ", version: " + version;
      if (isbn != null && !isbn.trim().isEmpty())
         result += ", isbn: " + isbn;
      if (title != null && !title.trim().isEmpty())
         result += ", title: " + title;
      if (author != null && !author.trim().isEmpty())
         result += ", author: " + author;
      if (description != null && !description.trim().isEmpty())
         result += ", description: " + description;
      if (price != null)
         result += ", price: " + price;
      if (nbOfPages != null)
         result += ", nbOfPages: " + nbOfPages;
      if (publicationDate != null && !publicationDate.trim().isEmpty())
         result += ", publicationDate: " + publicationDate;
      if (language != null)
         result += ", language: " + language;
      return result;
   }

   public Set<Speaker> getSpeakers()
   {
      return this.speakers;
   }

   public void setSpeakers(final Set<Speaker> speakers)
   {
      this.speakers = speakers;
   }
}