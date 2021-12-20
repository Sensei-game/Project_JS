sentence(Sentence,sentence(noun_phrase(Noun_Phrase),verb_phrase(Verb_Phrase))):-
  noun_phrase(Sentence,Noun_Phrase,Rem),
  verb_phrase(Rem,Verb_Phrase),nl,pptree(sentence(noun_phrase(Noun_Phrase),verb_phrase(Verb_Phrase))),nl.

noun_phrase([X|T],noun_phrase(det(X),NP2),Rem):-
  det(X),
  nl, write('Det: '),write(X),
  noun_phrase2(T,NP2,Rem).

noun_phrase2([H|T],noun_phrase2(noun(H)),T):- noun(H),nl,
  write('Noun: '),write(H).
noun_phrase2([H|T],noun_phrase2(adj(H),Rest),Rem):-
      adj(H),
      nl,write('Adj: '),write(H),
      noun_phrase2(T,Rest,Rem).

prep_phrase([H|T],prep_phrase(prep(H),Parse),Rem):-
  prep(H),
nl, write('Prep: ' ),write(H),
  noun_phrase(T,Parse,Rem).


verb_phrase([H|[]],verb(H)):-
  verb(H),
 nl,write('Verb: '),write(H).
verb_phrase([H|Rest],verb_phrase(verb(H),RestParsed)):-
  verb(H),nl,write('Verb: '),write(H),
  prep_phrase(Rest,RestParsed,_).
verb_phrase([H|Rest],verb_phrase(verb(H),RestParsed)):-
  verb(H),
  noun_phrase(Rest,RestParsed,_).


noun_phrase(Sentence,Parse,Rem):- noun_phrase2(Sentence,Parse,Rem).
noun_phrase(Sentence,noun_phrase(NP,PP),Rem):-
  noun_phrase(Sentence,NP,Rem1),nl,
  prep_phrase(Rem1,PP,Rem).

if(S, Cond) :-
    Cond,
    S.
if(_, Cond) :-
    not(Cond).

arg([], _).
arg([H|T], N) :-
    pptree(H, N),
    if(nl, T \== []),
    arg(T, N).

pptree(E, N) :-
    E =.. [H|T],
    length(T, Len),
    if(tab(N), Len >= 1),
    write(H),
    if(write('('), Len >= 1),
    if(nl, Len >= 2),
    Nx is N + 2,
    arg(T, Nx),
    if(write(')'), Len >= 1).

pptree(E) :-
    pptree(E, 0).


det(an).
det(a).
noun(father).
noun(book).
noun(boy).
noun(horses).
noun(grandfather).
noun(walk).
noun(person).
noun(chat).
noun(student).
noun(guitar).
noun(petrolhead).
noun(car).
verb(likes).
verb(loves).
adj(teenage).
adj(long).
adj(sprightly).
adj(social).
adj(young).
adj(avid).
adj(racing).
adj(old).
adj(good).
prep(with).
prep(on).


recommend(Vb,Thing,Recommendation):-
    member(Vb, [likes,loves]),
    member(Thing,[book,books]), Recommendation='Join the book club'.
recommend(Vb,Thing,Recommendation) :-
    member(Vb, [likes,loves]),
    member(Thing,[horse,horses]), Recommendation='Join the riding club'.
recommend(Vb,Thing,Recommendation) :-
    member(Vb, [likes,loves]),
    member(Thing, [walk,walks]), Recommendation='Join the rambling club'.
recommend(Vb,Thing,Recommendation) :-
    member(Vb, [likes,loves]),
    member(Thing, [chat,chats,talking]), Recommendation='Join a social club'.
recommend(Vb,Thing,Recommendation) :-
    member(Vb, [likes,loves]),
    member(Thing, [guitar,music]), Recommendation='Join a band'.
recommend(Vb,Thing,Recommendation):-
    member(Vb, [likes,loves]),
    member(Thing, [car,cars,racing]), Recommendation='Go see the races'.

sentence(Sentence,sentence(noun_phrase(Noun_Phrase),verb_phrase(Verb_Phrase))):-
  noun_phrase(Sentence,Noun_Phrase,Rem),
  verb_phrase(Rem,Verb_Phrase),nl,pptree(sentence(noun_phrase(Noun_Phrase),verb_phrase(Verb_Phrase))),nl.
read() :-
    write('Enter sentence as list: '),read(L),sentence(L,F),nl,write(F),nl,nl,
    (                                                                                 member(book,L) -> recommend(_,book,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,                                                                                  write(Recommend);
    member(horses,L) -> recommend(_,horses,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,
                                                           write(Recommend);
    member(walk,L) -> recommend(_,walk,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,
                                                           write(Recommend);
    member(chat,L) -> recommend(_,chat,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,                                                                                   write(Recommend);
    member(guitar,L) -> recommend(_,guitar,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,                                                                                  write(Recommend);
    member(car,L) -> recommend(_,car,Recommend),write('Sentence: '),nl,
    write(L),nl, write('Produces the recommendation: '),nl,                                                                                  write(Recommend)

    ).
