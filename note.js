/* Regular Expression

Meta-chars

single char             Quantifiers         position
/d -> 0-9               * -> 0 or more      ^  -> beginning
/w -> a-z A-z 0-9 _     + -> 1 or more      $  -> end
/s -> whitespace        ? -> 0 or 1         /b -> word boundry
.  -> any character     {min, max}
                        {n}


char-class (alternation)

[^0-9]{3}       // match // all non number
l[yi]nk         // match // link or lynk
\d{3}[-.]\d{3}  // match // 222.111 or 888-999
\b[A-Z][a-z]*\b // match // Book or The or A or Liitle or Son

\(?\d{3}[-.)]\d{3}[-.]\d{4}  // match // 222.111.2225
                                         888-999-7775
                                        (888)999-9995
 */